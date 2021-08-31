using Application.Interfaces;
using Domain.Entities;
using MediatR;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Customers
{
    public class CreateCustomerCommand : IRequest<int>
    {
        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Email { get; set; }
    }

    public class CreateUserHandler : IRequestHandler<CreateCustomerCommand, int>
    {
        private readonly IApplicationDbContext _context;

        public CreateUserHandler(IApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<int> Handle(CreateCustomerCommand request, CancellationToken cancellationToken)
        {
            var entity = new Customer
            {
                FirstName = request.FirstName,
                LastName = request.LastName,
                Email = request.Email
            };

            _context.Customers.Add(entity);

            await _context.SaveChangesAsync(cancellationToken);

            return entity.Id;
        }

    }
}
