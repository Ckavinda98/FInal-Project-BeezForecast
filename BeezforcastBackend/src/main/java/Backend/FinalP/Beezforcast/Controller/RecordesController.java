package Backend.FinalP.Beezforcast.Controller;

import Backend.FinalP.Beezforcast.Entity.Recordes;
import Backend.FinalP.Beezforcast.Entity.User;
import Backend.FinalP.Beezforcast.Service.RecordesService;
import Backend.FinalP.Beezforcast.Service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class RecordesController {
    private final RecordesService recordesService;


    public RecordesController(RecordesService recordesService) {
        this.recordesService = recordesService;
    }

    @PostMapping("/recordes")
    public Recordes createRecordes(@RequestBody Recordes recordes) {
        return recordesService.createRecordes(recordes);
    }

    @GetMapping("/recordes-all")
    public List<Recordes> getAllRecordes() {
        return recordesService.getAllRecordes();
    }

    @GetMapping("/recordes/{id}")
    public Recordes getRecordes(@PathVariable Long id) {
        return recordesService.getRecordes(id);
    }
}
