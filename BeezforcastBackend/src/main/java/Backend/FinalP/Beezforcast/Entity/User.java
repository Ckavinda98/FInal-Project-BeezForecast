package Backend.FinalP.Beezforcast.Entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
// @Data
@Table(name = "users")
@Getter
@Setter
// @AllArgsConstructor
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    @Column(unique = true)
    private String email;
    private String password;


    public User(int id, String name, String email, String password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
}
