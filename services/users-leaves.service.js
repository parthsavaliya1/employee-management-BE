const {UserLeaves, Users} = require("../models/index");

exports.findAllLeave = async () => await UserLeaves.findAll({
    include: [
        {
          model: Users,
          as: "user",
        },
      ],
});


exports.findLeaveByUserId = async (userId) => await UserLeaves.findAll({
    where:{userId}
});

exports.createLeave = async (user) => await UserLeaves.create(user);

exports.deleteLeave = async (leaveId) =>
  await UserLeaves.destroy({
    where: {
        leaveId,
    },
  });
