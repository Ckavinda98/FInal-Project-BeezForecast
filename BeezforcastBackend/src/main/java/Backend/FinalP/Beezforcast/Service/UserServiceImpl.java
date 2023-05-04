package Backend.FinalP.Beezforcast.Service;

import Backend.FinalP.Beezforcast.Entity.User;
import Backend.FinalP.Beezforcast.Repository.UserRepo;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    private UserRepo userRepository;

    public UserServiceImpl(UserRepo userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User createUser(User user) {
        User userEntity = new User();
        BeanUtils.copyProperties(user, userEntity);
        return userRepository.save(userEntity);
    }

    @Override
    public List<User> getAllUsers() {
        List<User> userEntities = userRepository.findAll();
        // List<UserEntity> users = userEntities.stream().map(user -> new
        // User(user.getId(),user.getName(),user.getEmail(),user.getPassword())).collect(Collectors.toList());
        return userEntities;
    }

    @Override
    public User getUser(Long id) {
        User userEntity = userRepository.findById(id).get();
        return userEntity;
    }

    @Override
    public User findUser(String email) {
        User ue = userRepository.findByEmail(email);
        // User user = new User(ue.getId(),ue.getName(),ue.getEmail(),ue.getPassword());
        return ue;
    }
}