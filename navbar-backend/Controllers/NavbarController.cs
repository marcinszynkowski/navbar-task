using Microsoft.AspNetCore.Mvc;

namespace navbar_backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class NavbarController : ControllerBase
    {

        private readonly ILogger<NavbarController> _logger;

        public NavbarController(ILogger<NavbarController> logger)
        {
            _logger = logger;
        }

        [HttpGet("/me")]
        public string[] Me()
        {
            return new[] { "admin" };
        }
    }
}
