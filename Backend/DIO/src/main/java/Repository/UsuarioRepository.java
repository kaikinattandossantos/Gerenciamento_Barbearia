package Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import model.usuario;

public interface UsuarioRepository extends JpaRepository<usuario, Long> {}
