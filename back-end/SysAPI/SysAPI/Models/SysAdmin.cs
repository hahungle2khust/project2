using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SysAPI.Models
{
    public class SysAdmin
    {
        public int sysAdId { get; set; }
        public string sysAdUser { get; set; }
        public string sysAdPasswd { get; set; }
        public string sysAdName { get; set; }
        public string sysAdDoB { get; set; }
        public string sysPhoto { get; set; }
    }
}
