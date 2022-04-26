"""my_controller2 controller."""
from controller import Robot

def run_robot(robot):
	
    time_step = 64
    max_speed = 6.28
	
	#Motor
    wheel1 = robot.getMotor('wheel1')
    wheel2 = robot.getMotor('wheel2')
    wheel3 = robot.getMotor('wheel3') 
    wheel4 = robot.getMotor('wheel4')
    wheel1.setPostion(float('inf'))
    wheel2.setPostion(float('inf'))
    wheel3.setPostion(float('inf'))
    wheel4.setPostion(float('inf'))
    wheel1.setVelocity(0.0)
    wheel2.setVelocity(0.0)
    wheel3.setVelocity(0.0)
    wheel4.setVelocity(0.0)

	#Enable ir
    ir_left = robot.getDistanceSensor('ir_left')
    ir_left.enable(time_step)

    ir_right = robot.getDistanceSensor('ir_right')
    ir_right.enable(time_step)

    ir_mid = robot.getDistanceSensor('ir_mid')
    ir_mid.enable(time_step)

	#step simulation
    while robot.step(time_step) != -1:
		
		#read ir value
        left_ir_value = ir_left.getValue()
        print(left_if_value)
        right_ir_value = ir_right.getValue()
        mid_ir_value = ir_mid.getValue()

        left_speed = max_speed
        right_speed = max_speed
		
        wheel1.setVelocity(left_speed)
        wheel2.setVelocity(right_speed)
        wheel3.setVelocity(right_speed)
        wheel4.setVelocity(left_speed)

if __name__ == "__main__":
    my_robot = Robot()
    run_robot(my_robot)
		