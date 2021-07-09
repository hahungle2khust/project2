using LoginDemo.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LoginDemo.Context
{
    public class AppDbCon : DbContext
    {
        public AppDbCon(DbContextOptions<AppDbCon> options) : base(options)
        {

        }
        public DbSet<Users> users { get; set; }
    }
}
