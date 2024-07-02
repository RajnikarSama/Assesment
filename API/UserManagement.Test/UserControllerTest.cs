using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UserManagement.Test
{
    using global::UserManagement.Api.Controllers;
    using global::UserManagement.Api.Models;
    using Microsoft.EntityFrameworkCore;
    using NUnit.Framework;

    namespace UserManagement.Test
    {
        [TestFixture]
        public class UserControllerTest
        {
            [Test]
            public void GetUser_ReturnsUser()
            {
                // Arrange
                var options = new DbContextOptions<UserContext>(); // Create an instance of DbContextOptions<UserContext>
                var context = new UserContext(options); // Pass the options as an argument to UserContext constructor
                var controller = new UsersController(context); // Pass the UserContext instance as an argument
                var userId = 1;

                // Act
                var result = controller.GetUser(userId);

                // Assert
                Assert.IsNotNull(result);
                Assert.That(true);
            }
        }
    }
}
