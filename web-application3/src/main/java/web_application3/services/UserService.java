package web_application3.services;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import web_application3.dto.UserDto;
import web_application3.entities.UserEntity;
import web_application3.repositories.UserRepository;

@Service
public class UserService {
	@Autowired
	UserRepository userRepository;
	public UserDto createUser(UserDto user) {
		UserDto returnValue=new UserDto();
		UserEntity userEntity=new UserEntity();
		BeanUtils.copyProperties(user, userEntity);
		userEntity.setUserId("testUser"+userEntity.getEmail());
		UserEntity userEntity1=userRepository.save(userEntity);
		BeanUtils.copyProperties(userEntity1, returnValue);
		return returnValue;
	}
	public UserDto getUser(String id) {
		UserDto returnValue=new UserDto();
		UserEntity userEntity=userRepository.findByUserId(id);
		BeanUtils.copyProperties(userEntity,returnValue);
		return returnValue;
	}
	public UserDto updateUser(String id,UserDto userDto) {
		UserDto returnValue=new UserDto();
		UserEntity userEntity=userRepository.findByUserId(id);
		userEntity.setFirstName(userDto.getFirstName());
		userEntity.setLastName(userDto.getLastName());
		userEntity.setEmail(userDto.getEmail());
		userRepository.save(userEntity);
		BeanUtils.copyProperties(userEntity, returnValue);
		return returnValue;
	}
	public String deleteUser(String id) {
		UserEntity userEntity=userRepository.findByUserId(id);
		if(userEntity!=null) {
			userRepository.delete(userEntity);
			return "Success";
		}
		else {
			return "No such record";
		}
	}
}
