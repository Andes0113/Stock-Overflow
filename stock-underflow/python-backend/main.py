from typing import Union
from pydantic import BaseModel
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from oracle import OracleClient


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Allows all origins
    allow_credentials=True,
    allow_methods=["*"], # Allows all methods
    allow_headers=["*"], # Allows all headers
)

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/companies")
def get_stocks():
    return { "data": OracleClient.getStocks()}

@app.get("/stock_data")
def get_stock_data(ticker: str, start_date: str, end_date: str, indvar: str, dataType: str, multiSelect: str, multiSelectType: str, ticker2: str):
    if indvar == 'Price':
        indvar = 'Open'
    if multiSelectType != 'None':
        return {"data": OracleClient.getTwoStockData(ticker, ticker2, start_date, end_date, indvar, dataType, multiSelectType )}
    return { "data": OracleClient.getStockData(ticker, start_date, end_date, indvar, dataType)}