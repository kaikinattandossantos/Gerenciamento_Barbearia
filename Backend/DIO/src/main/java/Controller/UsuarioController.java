package Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Repository.UsuarioRepository;
import model.usuario;

@RestController
@RequestMapping("/usuarios")
@CrossOrigin(origins = "*") // permite conexão com Angular
public class UsuarioController {

  @Autowired
  private UsuarioRepository usuarioRepository;

  @GetMapping
  public List<usuario> listarTodos() {
    return usuarioRepository.findAll();
  }

  @PostMapping
  public usuario criar(@RequestBody usuario usuario) {
    return usuarioRepository.save(usuario);
  }

  @PutMapping("/{id}")
  public usuario atualizar(@PathVariable Long id, @RequestBody usuario usuarioAtualizado) {
    usuario usuario = usuarioRepository.findById(id).orElseThrow();
    usuario.setNome(usuarioAtualizado.getNome());
    usuario.setNumeroAcesso(usuarioAtualizado.getNumeroAcesso());
    return usuarioRepository.save(usuario);
  }

  @DeleteMapping("/{id}")
  public void deletar(@PathVariable Long id) {
    usuarioRepository.deleteById(id);
  }
}
