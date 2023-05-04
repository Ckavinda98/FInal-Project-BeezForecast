package Backend.FinalP.Beezforcast.Service;

import Backend.FinalP.Beezforcast.Entity.Recordes;
import Backend.FinalP.Beezforcast.Entity.User;
import Backend.FinalP.Beezforcast.Repository.RecordesRepo;
import Backend.FinalP.Beezforcast.Repository.UserRepo;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecordesServiceImpl implements RecordesService {
    private RecordesRepo recordesRepository;

    public RecordesServiceImpl(RecordesRepo recordesRepository) {
        this.recordesRepository = recordesRepository;
    }

    @Override
    public Recordes createRecordes(Recordes recordes) {
        Recordes recordesEntity = new Recordes();
        BeanUtils.copyProperties(recordes, recordesEntity);
        return recordesRepository.save(recordesEntity);
    }

    @Override
    public List<Recordes> getAllRecordes() {
        List<Recordes> recordesEntity = recordesRepository.findAll();
        // List<UserEntity> users = userEntities.stream().map(user -> new
        // User(user.getId(),user.getName(),user.getEmail(),user.getPassword())).collect(Collectors.toList());
        return recordesEntity;
    }

    @Override
    public Recordes getRecordes(Long id) {
        Recordes userEntity = recordesRepository.findById(id).get();
        return userEntity;
    }
}
