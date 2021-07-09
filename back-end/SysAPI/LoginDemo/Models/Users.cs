using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace LoginDemo.Models
{
    [Table("user")]
    public class Users
    {
        [Key]
        public int id { get; set; }
        public string userName { get; set; }
        public string email { get; set; }
        public string loginname { get; set; }
        public string password { get; set; }
        public DateTime dob { get; set; }
        public string photo { get; set; }
        public string sex { get; set; }
    }
}
