package com.wed.app.service;

import com.wed.app.model.User;
import com.wed.app.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User addUser(User user) {
        System.out.println("User added successfully");
        return userRepository.save(user);
    }
}