package app;

import javax.xml.ws.Endpoint;

public class TurmaServerPublisher {

    public static void main(String[] args)
    {
        Endpoint.publish("localhost:8080", new TurmaServerImpl());
    }
}