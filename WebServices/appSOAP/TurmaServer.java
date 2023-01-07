package app;

import javax.jws.WebService;
import javax.jws.WebMethod;
import javax.jws.soap.SOAPBinding;
import javax.jws.soap.SOAPBinding.Style;

@WebService
@SOAPBinding(style = Style.RPC)
public interface TurmaServer {
    @WebMethod int verNota(int nota);
    @WebMethod int addNota(int aluno, int matricula);
    @WebMethod boolean verificarSituacao(int matricula);
    @WebMethod boolean cancelarNota(int matricula);
}