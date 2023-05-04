package Backend.FinalP.Beezforcast.Service;

import Backend.FinalP.Beezforcast.Entity.User;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserService {

    User createUser(User user);

    List<User> getAllUsers();

    User getUser(Long id);

    User findUser(String email);
}
