from flask import Flask, jsonify, redirect
from products import Product, Session
import random


app = Flask(__name__)

@app.route('/product/all', methods=['GET'])
def show_all():
    session = Session()
    products = session.query(Product).all()
    session.close()
    product_list=[]
    for product in products:
        product_data = {
            "name": product.name,
            "category": product.category,
            "price": product.price
            }
        product_list.append(product_data)
    return jsonify(product_list)

@app.route('/product/sample', methods=['POST'])
def create_sample():
    ### sample data for catalogue
    names = ["Avocado", "Fertilizer", "Tomato Seeds", "Green Plantains", "Compost", "Garlic", "Cabbages", "Pepper"]
    prices = [*range(10, 30, 2)]
    categories = ["foods", "tools", "seeds"]
    quantities = [*range(10, 20, 1)]

    session = Session()
    
    for _ in range(20):
        product = Product(name=random.choice(names), price=random.choice(prices), quantity=random.choice(quantities), category=random.choice(categories))
        session.add(product)

    session.commit()
    session.close()
    return redirect('/product/all')

@app.route('/product/add', methods=['POST'])
def add_product():
    session = Session()
    name = str(input("Enter product name: "))
    category = str(input("Enter product categpry: "))
    price = int(input("Enter product price: "))
    quantity = int(input("Enter product quantity: "))
    products = Product(name=name, price=price, quantity=quantity, category=category)
    session.add(products)
    session.commit()
    session.close()

@app.route('/product/delete', methods=['DELETE'])
def delete_all():
    session = Session()
    session.query(Product).delete()
    session.commit()
    session.close()
    return "All products deleted successfully"



if __name__ == '__main__':
    app.run(debug=True) # will remove debug=True in production