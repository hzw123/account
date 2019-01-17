package cn.mauth.account.exception;

public class CustomException extends RuntimeException{
    public CustomException(String message){
        super(message);
    }

    public CustomException() {
        super();
    }

    public CustomException(String message, Throwable cause) {
        super(message, cause);
    }
}
