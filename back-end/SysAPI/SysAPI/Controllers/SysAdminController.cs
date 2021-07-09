using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Sql;
using System.Data.SqlClient;
using System.Linq;
using System.IO;
using System.Threading.Tasks;

namespace SysAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SysAdminController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _envi;
        public SysAdminController(IConfiguration configuration, IWebHostEnvironment envi)
        {
            _configuration = configuration;
            _envi = envi;
        }
        //Get
        [HttpGet]
        public JsonResult Get()
        {
            string query = @"select EmployeeId, EmployeeName, convert(varchar(10), DoB, 120) as DoB, Department, PhotoFileName 
                             from dbo.Employee";
            DataTable table = new DataTable();

            string sqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand sqlCommand = new SqlCommand(query, myCon))
                {
                }
            }
            return new JsonResult(table);
        }
    }
}
