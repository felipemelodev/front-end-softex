package app;

import java.util.Date;
import javax.jws.WebService;

@WebService(endpointInterface = "app.TurmaServer")
public class TurmaServerImpl implements TurmaServer {
    
    public int verNota(int nota){
        return "Nota: " + nota;
    }
    public int addNota(String aluno, int matricula, int nota){
        return "Nome: " + aluno + ", Matrícula: " + matricula + ", Nota: " + nota;
    }
    public boolean verificarSituacao(int nota){
        return true;
    }
    public int cancelarNota(int nota){
        return false;
    }
}
