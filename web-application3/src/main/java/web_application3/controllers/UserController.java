package web_application3.controllers;
import org.springframework.web.bind.annotation.RestController;

import web_application3.dto.UserDto;
import web_application3.models.UserRequestModel;
import web_application3.models.UserResponseModel;
import web_application3.services.UserService;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
@RestController
@RequestMapping("user")
public class UserController {
	@Autowired
	UserService userService;
	@GetMapping(path="/{id}")
	public UserResponseModel getUser(@PathVariable String id) {
		UserResponseModel returnValue=new UserResponseModel();
		UserDto userDto=userService.getUser(id);
		BeanUtils.copyProperties(userDto, returnValue);
		return returnValue;
	}
	@PostMapping
	public UserResponseModel createUser(@RequestBody UserRequestModel user) {
		UserResponseModel returnValue = new UserResponseModel();
		UserDto userDto=new UserDto();
		BeanUtils.copyProperties(user, userDto);
		UserDto userDto1=userService.createUser(userDto);
		BeanUtils.copyProperties(userDto1, returnValue);
		return returnValue;
	}
	@PutMapping(path="/{id}")
	public UserResponseModel updateUser(@PathVariable String id, @RequestBody UserRequestModel userRequestModel) {
		UserResponseModel returnValue=new UserResponseModel();
		UserDto userDto=new UserDto();
		BeanUtils.copyProperties(userRequestModel, userDto);
		UserDto userDto1=userService.updateUser(id,userDto);
		BeanUtils.copyProperties(userDto1,returnValue);
		return returnValue;
	}
	@DeleteMapping(path="/{id}")
	public String deleteUser(@PathVariable String id) {
		String st=userService.deleteUser(id);
		return st;
	}
}
