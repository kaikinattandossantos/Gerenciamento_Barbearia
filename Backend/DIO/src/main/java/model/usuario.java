package model;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class usuario implements Serializable{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, length = 100)
    private Long id;
    private String nome;
    private String numeroAcesso;


    public usuario(Long id, String nome, String numeroAcesso) {
        this.id = id;
        this.nome = nome;
        this.numeroAcesso = numeroAcesso;
    }

        public usuario() {
        }
    
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


}