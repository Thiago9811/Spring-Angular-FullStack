package net.crudproject.springboot.repository;
 
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import net.crudproject.springboot.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long>{
	
}
