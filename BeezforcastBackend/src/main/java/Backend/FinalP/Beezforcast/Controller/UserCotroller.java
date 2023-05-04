package Backend.FinalP.Beezforcast.Controller;

import Backend.FinalP.Beezforcast.Entity.User;
import Backend.FinalP.Beezforcast.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class UserCotroller {
    private final UserService userService;




    public UserCotroller(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/user")
    public User createUser(@RequestBody User user) {
        return userService.createUser(user);
    }

    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/user/{id}")
    public User getUser(@PathVariable Long id) {
        return userService.getUser(id);
    }

    @GetMapping("/user/{email}/{pass}")
    public User findUser(@PathVariable String email, @PathVariable String pass) {
        User user = userService.findUser(email);
        String password = user.getPassword();
        if (pass.equals(password)) {
            return user;
        }
        return null;

    }
}
