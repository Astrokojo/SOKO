from flask import Blueprint, jsonify, request
from Product.model import Product
from config import session

#Creates a blueprint object for the cart package that will be used in main.py
cart_bp = Blueprint('cart', __name__)

@cart_bp.route('/addtocart', methods=['GET','POST'])
def AddToCart():
    # Get the JSON data from the frontend
    data = request.json
    product_id = data.get('id')
    quantity = data.get('quantity')
    product = session.query(Product).filter_by(id=product_id).first()
    
    if product:
        cart_item = {product_id:{'name': product.product_name, 'price': product.price}, quantity:"quantity"}
        
        if 'Cart' in session:
            session['Cart'].append(cart_item)
        else:
            session['Cart'] = [cart_item]
            
        return jsonify({'message': 'Product added to cart.'}), 200
    
    else:
        return jsonify({'error': 'Product not found.'}), 404
         
    
    
@cart_bp.route('/carts')
def getCart():
    if 'Cart' in session:
        cart_items = session['Cart']
        return jsonify({'cart': cart_items})
    else:
        return jsonify({'message': 'Cart is empty.'})
        