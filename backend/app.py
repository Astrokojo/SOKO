from config import app, Base, engine
from Product.routes import product_bp, create_sample
from Cart.routes import cart_bp

# Import the blueprints
app.register_blueprint(product_bp)
app.register_blueprint(cart_bp)


if __name__ == "__main__":
    with app.app_context():
        create_sample()
        Base.metadata.create_all(engine)
    
    app.run()