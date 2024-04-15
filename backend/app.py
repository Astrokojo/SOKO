from config import app, Base, engine
from Product.routes import product_bp, create_sample
from Cart.routes import cart_bp

# Import the blueprints
app.register_blueprint(product_bp)
app.register_blueprint(cart_bp)

@app.before_request
def initialize_database():
    """Create database and add sample data"""
    Base.metadata.create_all(engine)
    create_sample()
    
    
initialize_database()

if __name__ == "__main__":    
    app.run()