from sqlalchemy import create_engine, Column, String, Integer
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base
import random

db_url = "sqlite:///products.db"
engine = create_engine(db_url)

Base = declarative_base()

Session = sessionmaker(bind=engine)

class Product(Base):
    __tablename__ = "product"
    id = Column(Integer, primary_key=True)
    name = Column(String)
    price = Column(Integer)
    category = Column(String)
    quantity= Column(Integer)
    
    
    

Base.metadata.create_all(engine)
Session = sessionmaker(bind=engine)






    



    