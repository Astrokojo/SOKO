from flask import Flask, jsonify, request, session
from .products import Product

app = Flask(__name__)

@app.route('/addtocart', methods=['POST'])
def AddToCart():
    # Get the JSON data from the frontend
    data = request.json
    product_id = data.get('product_id')
    quantity = data.get('quantity')
    product = Product.query.filter_by(id=product_id).first()
    
    if product:
        cart_item = {product_id:{'name': product.name, 'price': product.price}}
        
        if 'Cart' in session:
            session['Cart'].append(cart_item)
        else:
            session['Cart'] = [cart_item]
        return jsonify({'message': 'Product added to cart.'}), 200
    else:
        return jsonify({'error': 'Product not found.'}), 404
         
    
    
@app.route('/carts')
def getCart():
    if 'Cart' in session:
        cart_items = session['Cart']
        return jsonify({'cart': cart_items}), 200
    else:
        return jsonify({'message': 'Cart is empty.'}), 200
        
    
if __name__ == '__main__':
    app.run(debug=True) # will remove debug=True in production