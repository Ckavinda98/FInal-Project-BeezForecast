package Backend.FinalP.Beezforcast.Entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
// @Data
@Table(name = "recordes")
@Getter
@Setter
// @AllArgsConstructor
@NoArgsConstructor
public class Recordes {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;


    private String email;

    private String state;

    private Long varroa_mites;

    private Long parasites;

    private Long diseases;

    private Long queen;

    private Long weather;

    private Long pesticides;


    public Recordes(int id, String name, String email, String state, Long varroa_mites, Long parasites, Long diseases, Long queen, Long weather, Long pesticides) {
        this.name = name;
        this.email = email;
        this.state = state;
        this.varroa_mites = varroa_mites;
        this.parasites = parasites;
        this.diseases = diseases;
        this.queen = queen;
        this.weather = weather;
        this.pesticides = pesticides;
    }
}
