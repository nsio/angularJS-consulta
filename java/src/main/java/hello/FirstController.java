package hello;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import angular.Contato;
import angular.Operadora;

@RestController
public class FirstController {
	
	private static final String template = "Hello, %s!";
	private final AtomicLong count = new AtomicLong();
	
	@RequestMapping("/first")
	public First first(@RequestParam(value="name", defaultValue="Mundo") String name){
		return new First(count.incrementAndGet(), String.format(template, name));
	}
	
	
	@RequestMapping("/operadoras")
	public List<Operadora> operadoras(){
		List<Operadora> operadoras = new ArrayList<Operadora>();
		operadoras.add(new Operadora(count.incrementAndGet(), "Oi", 14, "celular", new BigDecimal(2)));
		operadoras.add(new Operadora(count.incrementAndGet(), "Tim", 41, "celular", new BigDecimal(2)));
		operadoras.add(new Operadora(count.incrementAndGet(), "Vivo", 15, "celular", new BigDecimal(3)));
		operadoras.add(new Operadora(count.incrementAndGet(), "GVT", 19, "Fixo", new BigDecimal(2)));
		operadoras.add(new Operadora(count.incrementAndGet(), "Embratel", 21, "Fixo", new BigDecimal(1)));
		return operadoras;
	}
	
	@RequestMapping("/contatos")
	public List<Contato> contatos(){
		List<Contato> contatos = new ArrayList<Contato>();
		contatos.add(new Contato(count.incrementAndGet(), "Pedro", "999999999", new Date(), new Operadora(count.incrementAndGet(), "Oi", 14, "celular", new BigDecimal(2)), 
								 "yellow"));
		contatos.add(new Contato(count.incrementAndGet(), "Ana", "999999988", new Date(), new Operadora(count.incrementAndGet(), "Tim", 41, "celular", new BigDecimal(2)), 
				                 "blue"));
		contatos.add(new Contato(count.incrementAndGet(), "Ana", "999999988", new Date(), new Operadora(count.incrementAndGet(), "Vivo", 15, "celular", new BigDecimal(3)), 
                				"red"));
		return contatos;
	}
	
}
