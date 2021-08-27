using Application.Interfaces;
using Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Users
{
    public class GetUsersQuery : IRequest<List<User>>
    {
    }

    public class GetUsersHandler : IRequestHandler<GetUsersQuery, List<User>>
    {
        private readonly IApplicationDbContext _context;

        public GetUsersHandler(IApplicationDbContext context)
        {
            _context = context;
        }

        public Task<List<User>> Handle(GetUsersQuery request, CancellationToken cancellationToken)
        {
            var users = _context.Users.OrderBy(i => i.FirstName).ToList();
            return Task.FromResult(users);
        }

    }
}
