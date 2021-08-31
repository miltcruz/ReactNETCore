using Application.Customers;
using Domain.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace WebUI.Controllers
{
    [Authorize]
    public class CustomerController : ApiControllerBase
    {

        [HttpGet]
        public async Task<IEnumerable<Customer>> Get()
        {
            return await Mediator.Send(new GetCustomersQuery());
        }

        [HttpPost]
        public async Task<int> Create(CreateCustomerCommand command)
        {
            return await Mediator.Send(command);

        }

    }
}
