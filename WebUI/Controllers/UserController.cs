using Application.Users;
using Domain.Entities;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace WebUI.Controllers
{
    public class UserController : ApiControllerBase
    {

        [HttpGet]
        public async Task<IEnumerable<User>> Get()
        {
            return await Mediator.Send(new GetUsersQuery());
        }

        [HttpPost]
        public async Task<int> Create(CreateUserCommand command)
        {
            return await Mediator.Send(command);

        }

    }
}
