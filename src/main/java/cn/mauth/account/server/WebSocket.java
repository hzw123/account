package cn.mauth.account.server;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.websocket.*;
import javax.websocket.server.PathParam;
import javax.websocket.server.ServerEndpoint;
import java.util.concurrent.CopyOnWriteArraySet;

@Service
@ServerEndpoint("/webSocket")
public class WebSocket {

    private static final Logger log= LoggerFactory.getLogger(WebSocket.class);

    private Session session;
    private String ip; // 客户端ip

    private static CopyOnWriteArraySet<WebSocket> webSocketSet=new CopyOnWriteArraySet<>();

    @OnOpen
    public void onOpen(Session session,@PathParam("ip") String ip){
        this.session=session;
        this.ip=ip;
        webSocketSet.add(this);
        log.info("【websocket消息】 有新的连接，总数：{}",webSocketSet.size());
    }

    @OnClose
    public void onClose(){
        webSocketSet.remove(this);
        log.info("【websocket消息】 连接断开，总数：{}",webSocketSet.size());
    }

    @OnMessage
    public void onMessage(String message){
        log.info("【websocket消息】 收到客户端发来的消息：{}",message);
    }

    @OnError
    public void onError(Session session, Throwable error) {
        log.error("webSocket发生错误！IP：{}", ip);
        error.printStackTrace();
    }


    public void sendMessage(String message){
        for(WebSocket webSocket:webSocketSet){
            log.info("【websocket消息】 广播消息，message={}",message);
            try {
                //后端发送WebSocket消息的方式
                webSocket.session.getBasicRemote().sendText(message);
            }catch (Exception e){
                e.printStackTrace();
            }
        }
    }

    public Session getSession() {
        return session;
    }

    public String getIp() {
        return ip;
    }
}
