
import subprocess

def generate_response(user_message: str) -> str:
    try:
        result = subprocess.run(
            ["ollama", "run", "llama3"],
            input=user_message,
            text=True,
            capture_output=True,
            timeout=60
        )
        return result.stdout.strip()
    except Exception as e:
        return f"Local AI error: {e}"
