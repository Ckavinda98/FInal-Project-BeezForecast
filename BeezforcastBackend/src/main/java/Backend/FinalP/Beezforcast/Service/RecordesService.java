package Backend.FinalP.Beezforcast.Service;

import Backend.FinalP.Beezforcast.Entity.Recordes;
import Backend.FinalP.Beezforcast.Entity.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface RecordesService {
    Recordes createRecordes(Recordes recordes);

    List<Recordes> getAllRecordes();

    Recordes getRecordes(Long id);
}
