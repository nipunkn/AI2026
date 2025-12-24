
from backend.logs.logger import logger
from backend.memory.store import add_message, get_history
from backend.ai.llm import generate_response




from fastapi import FastAPI
from pydantic import BaseModel
import uvicorn
import datetime

app = FastAPI(title="AI Assistant Backend")


class UserMessage(BaseModel):
    message: str


class AIResponse(BaseModel):
    response: str
    timestamp: str




@app.get("/")
def root():
    logger.info("Health check requested")
    return {
        "status": "online",
        "message": "AI Assistant backend running"
    }



@app.post("/chat", response_model=AIResponse)
def chat(data: UserMessage):
    try:
        reply = generate_response(data.message)
        logger.info(f"AI response: {reply}")

        return AIResponse(
            response=reply,
            timestamp=str(datetime.datetime.now())
        )

    except Exception as e:
        logger.error(f"AI error: {e}")

        return AIResponse(
            response="Sorry, something went wrong while processing your request.",
            timestamp=str(datetime.datetime.now())
        )





#SERVER
if __name__ == "__main__":
    uvicorn.run(
        "main:app",
        host="127.0.0.1",
        port=8000,
        reload=True
    )
