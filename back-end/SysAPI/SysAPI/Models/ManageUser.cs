using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SysAPI.Models
{
    public class ManageUser
    {
        public int userId { get; set; }
        public string userName { get; set; }
        public string userLogin { get; set; }
        public string userPasswd { get; set; }
        public string userDep { get; set; }
        public string DoB { get; set; }
        public string userPhoto { get; set; }
    }
}
