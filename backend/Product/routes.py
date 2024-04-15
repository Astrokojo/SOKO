from flask import Blueprint, jsonify, request, redirect
from Product.model import Product
from config import session
import random

#Creates a blueprint object for the product package that will be used in main.py
product_bp = Blueprint('product', __name__)

@product_bp.route('/products', methods=['GET'])
def get_products():
    """Gets all the products from the database"""
    products = session.query(Product).all()
    json_products = list(map(lambda x: x.to_json(), products))
    return jsonify({"products": json_products})
  
  
@product_bp.route('/products/<int:product_id>', methods=['GET'])
def get_product(product_id):
    """Get a product from the database based on its id"""
    product = session.query(Product).filter_by(id=product_id).first()
    
    if not product:
        return jsonify({"message": "Product not found"}), 404
    
    return jsonify(product.to_json())


@product_bp.route('/products', methods=['POST'])
def create_product():
    """Create a new product based JSON data from frontend""" 
    data = request.json
    product_name = data.get("productName")
    price = data.get("price")
    category = data.get("category")
    stock= data.get("stock")
    
    if not product_name or not price or not stock:
        return jsonify({"message": "You must include a product name, price and amount you have in stock"}), 400
    
    new_product = Product(product_name=product_name, price=price, category=category, stock=stock)
    try:
        session.add(new_product)
        session.commit()
    except Exception as e:
        session.rollback()
        return jsonify({"message": str(e)}), 400
    
    return jsonify(({"message": "Product updated!", "product": new_product.to_json()})), 201


@product_bp.route('/products/<int:product_id>', methods=['PUT'])
def update_product(product_id):
    """Update an existing product based on the JSON data in the request"""
    product = session.query(Product).filter_by(id=product_id).first()
    
    if not product:
        return jsonify({"message": "Product not found"}), 404
    
     # this snippet keeps the old name as a second option if there are no changes
    data = request.json
    product.product_name = data.get("productName", product.product_name)
    product.price = data.get("price", product.price)
    product.category = data.get("category", product.category)
    product.stock = data.get("stock", product.stock)
    
    try:
        session.commit()
        return jsonify(({"message": "Product updated!", "product": product.to_json()}))
    except Exception as e:
        session.rollback()
        return jsonify({"message": str(e)}), 400


@product_bp.route('/product/<int:product_id>', methods=['DELETE'])
def delete_product(product_id):
    """delete a product using it's ID"""
    product = session.query(Product).filter_by(id=product_id).first()
    
    if not product:
        return jsonify({"message": "Product not found"}), 404
    
    try:
        session.delete(product)
        session.commit()
    except Exception as e:
        session.rollback()
        return jsonify({"message": str(e)}), 400
    
    return "Product deleted successfully"


@product_bp.route('/product/sample', methods=['POST'])
def create_sample():
    """ creates random sample data for catalogue """
    names = ["Avocado", "Fertilizer", "Tomato Seeds", "Green Plantains", "Compost", "Garlic", "Cabbages", "Pepper"]
    prices = [*range(10, 30, 2)]
    categories = ["foods", "tools", "seeds"]
    stock = [*range(10, 20, 1)]
    
    for _ in range(20):
        product = Product(product_name=random.choice(names), price=random.choice(prices), stock=random.choice(stock), category=random.choice(categories))
        session.add(product)

    session.commit()
    session.close()
    return redirect('/products')
