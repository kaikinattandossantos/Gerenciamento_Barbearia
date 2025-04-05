package model;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "usuarios") 
public class usuario implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 100)
    private String nome;

    @Column(name = "numero_acesso", unique = true, length = 50) // Better column naming for databases
    private String numeroAcesso;

    // Constructors
    public usuario() {
        // Required empty constructor for JPA
    }

    public usuario(String nome, String numeroAcesso) {
        this.nome = nome;
        this.numeroAcesso = numeroAcesso;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getNumeroAcesso() {
        return numeroAcesso;
    }

    public void setNumeroAcesso(String numeroAcesso) {
        this.numeroAcesso = numeroAcesso;
    }

    // Optional: toString(), equals(), hashCode()
    @Override
    public String toString() {
        return "usuario [id=" + id + ", nome=" + nome + ", numeroAcesso=" + numeroAcesso + "]";
    }
}

