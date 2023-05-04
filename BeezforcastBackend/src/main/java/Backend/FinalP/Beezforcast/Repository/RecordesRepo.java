package Backend.FinalP.Beezforcast.Repository;

import Backend.FinalP.Beezforcast.Entity.Recordes;
import Backend.FinalP.Beezforcast.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface RecordesRepo extends JpaRepository<Recordes, Long> {
    Recordes findByEmail(@Param("email") String email);
}
