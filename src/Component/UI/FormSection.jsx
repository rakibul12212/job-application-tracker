"use client";
import { PlusOutlined } from "@ant-design/icons";
import { DatePicker, Form, Input, Select, Upload } from "antd";
import TextArea from "antd/es/input/TextArea";
import Btn from "./btn";


const onChange = (date, dateString) => {
  console.log(date, dateString);
};

const FormSection = () => {
  return (
    <div className="p-6 md:p-6 mt-4 bg-white shadow-lg rounded-xl max-w-4xl mx-auto">
      <Form layout="vertical">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
          <Form.Item label="Company Name" name="companyName">
            <Input placeholder="Enter company name" />
          </Form.Item>

          <Form.Item label="Job Title" name="jobTitle">
            <Input placeholder="Enter job title" />
          </Form.Item>

          <Form.Item label="Location" name="location">
            <Input placeholder="Enter location" />
          </Form.Item>

          <Form.Item label="Application Date" name="applicationDate">
            <DatePicker
              className="w-full"
              placeholder="Select application date"
              onChange={onChange}
            />
          </Form.Item>

          <Form.Item label="Contact Person" name="contactPerson">
            <Input placeholder="Enter contact person name" />
          </Form.Item>

          <Form.Item label="Contact Email" name="contactEmail">
            <Input type="email" placeholder="Enter contact email" />
          </Form.Item>

          <Form.Item label="Contact Number" name="contactNumber">
            <Input type="number" placeholder="Enter contact number" />
          </Form.Item>
          <Form.Item label="Select">
            <Select placeholder="From where you applied">
              <Select.Option value="demo">LinkedIn</Select.Option>
              <Select.Option value="demo">BD Jobs</Select.Option>
              <Select.Option value="demo">Facebook</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="Upload Resume or File" name="upload">
            <Upload action="/upload.do" listType="picture-card">
              <button
                type="button"
                className="flex flex-col items-center justify-center text-gray-500"
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <PlusOutlined />
                <div className="mt-2 text-sm">Upload</div>
              </button>
            </Upload>
          </Form.Item>
        </div>

        <Form.Item label="Additional Notes" name="notes">
          <TextArea rows={4} placeholder="Write something..." maxLength={200} />
        </Form.Item>

        <Form.Item className="text-left">
          <Btn />
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormSection;
