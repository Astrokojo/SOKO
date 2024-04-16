from sqlalchemy import Column, String, Integer
from config import Base

class Product(Base):
    __tablename__ = "product"
    
    
    id = Column(Integer, primary_key=True)
    product_name = Column(String(80), unique=False, nullable=False)
    price = Column(Integer, default=0, nullable=False)
    category = Column(String(80), unique=False, nullable=False)
    stock= Column(Integer, default=0, nullable=False)
    
    def to_json(self):
        """Serializes the product information into JSON format
        """
        return {
            "id": self.id,
            "productName": self.product_name,
            "price": self.price,
            "category": self.category,
            "stock": self.stock
            }