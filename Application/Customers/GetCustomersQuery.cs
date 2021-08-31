using Application.Interfaces;
using Domain.Entities;
using MediatR;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Customers
{
    public class GetCustomersQuery : IRequest<List<Customer>>
    {
    }

    public class GetCustomersHandler : IRequestHandler<GetCustomersQuery, List<Customer>>
    {
        private readonly IApplicationDbContext _context;

        public GetCustomersHandler(IApplicationDbContext context)
        {
            _context = context;
        }

        public Task<List<Customer>> Handle(GetCustomersQuery request, CancellationToken cancellationToken)
        {
            var customers = _context.Customers.OrderBy(i => i.FirstName).ToList();
            return Task.FromResult(customers);
        }

    }
}
