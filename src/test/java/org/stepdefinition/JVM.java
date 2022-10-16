package org.stepdefinition;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

public class JVM {
	
	public static void reportGeneration(String jsonpath) {
		
		//Locate the  target folder location
		File f=new File("C:\\Users\\Rajesh c\\eclipse-workspace\\MavenCucumber\\jvm");
		
		//Add external details to the report using configuration class
		Configuration c=new Configuration(f, "FaceBook & Amazon");//we can choose second configuration normal class not abstract class 
		c.addClassifications("Environment", "Testing Environment");// we can choose second one (String,String)
		c.addClassifications("Platform", "Windows");
		c.addClassifications("Version", "10th");
		c.addClassifications("Browser", "Chrome");
		c.addClassifications("Version", "101");
		
		//Add internal json file path to the report in List<String>
		List<String> li=new ArrayList<String>();
		li.add(jsonpath);
		
		//Merge internal and external details to the report using object creation reportbuilder
		ReportBuilder rs=new ReportBuilder(li, c);
		
		rs.generateReports();
		
		

	}

}
