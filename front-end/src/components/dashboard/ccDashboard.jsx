import React from 'react';
import {Button, DatePicker, Form, Input, InputNumber, Popconfirm, Table, Typography} from "antd";
import "antd/dist/antd.css"
import { useState } from "react";
import { useEffect } from 'react';
import moment from 'moment';



// Course Coordinator Dashboard

function CCDashboard (){

    const [state, setState] = useState([]);             // Using Current Data List
    const [editingState, setEditState] = useState(null);   // Using for editing row
    const [form] = Form.useForm();                      // Using form hook

    const dateFormat = 'YYYY/MM/DD';                    //Date Format


    // Columns of the Table
    const column = [
        {
            title: "No",
            dataIndex: 'number',
            align: 'center',
            key: 'number',
            width: 40,
            fixed: 'left',
            

            render: (text, record) => {
                if(editingState === record.key){
                    return (
                        <Form.Item
                            name="number"
                        >
                            <Input />
                        </Form.Item>
                    )
                }
                else{
                    return(
                        <p>{text}</p>
                    )
                }
            }

        },

        {
            title: "Name with Initials",
            dataIndex: 'nameWithInitials',
            key: 'nameWithInitials',
            align: 'center',
            width: 100,
            
            render: (text, record) => {
                if(editingState === record.key){
                    return (
                        <Form.Item
                            name="nameWithInitials"
                        >
                            <Input />
                        </Form.Item>
                    )
                }
                else{
                    return(
                        <p>{text}</p>
                    )
                }
            }
        },

        {
            title: "Name Denoted By Initials",
            dataIndex: 'initials',
            key: 'initials',
            align: 'center',
            width: 100,

            render: (text, record) => {
                if(editingState === record.key){
                    return (
                        <Form.Item
                            name="initials"
                        >
                            <Input />
                        </Form.Item>
                    )
                }
                else{
                    return(
                        <p>{text}</p>
                    )
                }
            }
        },

        {
            title: "Provisional Student Registration: HDC Meeting Number",
            dataIndex: 'hdcNumberPro',
            key: 'hdcNumberPro',
            align: 'center',
            width: 75,

            render: (text, record) => {
                if(editingState === record.key){
                    return (
                        <Form.Item
                            name="hdcNumberPro"
                        >
                            <Input />
                        </Form.Item>
                    )
                }
                else{
                    return(
                        <p>{text}</p>
                    )
                }
            }
        },

        {
            title: "Registration Number",
            dataIndex: 'regNo',
            key: 'regNo',
            align: 'center',
            width: 50,

            render: (text, record) => {
                if(editingState === record.key){
                    return (
                        <Form.Item
                            name="regNo"
                        >
                            <Input />
                        </Form.Item>
                    )
                }
                else{
                    return(
                        <p>{text}</p>
                    )
                }
            }
        },

        {
            title: "Date of Registration",
            dataIndex: 'dateOfReg',
            key: 'dateOfReg',
            align: 'center',
            width: 75,

            render: (text, record) => {
                if(editingState === record.key){
                    return (
                        <Form.Item
                            name="dateOfReg"
                        >
                            <Input />
                        </Form.Item>
                    )
                }
                else{
                    return(
                        <p>{text}</p>
                    )
                }
            }
        },

        {
            title: "Full Time/ Part Time",
            dataIndex: 'period',
            key: 'period',
            align: 'center',
            width: 75,

            render: (text, record) => {
                if(editingState === record.key){
                    return (
                        <Form.Item
                            name="period"
                        >
                            <Input />
                        </Form.Item>
                    )
                }
                else{
                    return(
                        <p>{text}</p>
                    )
                }
            }
        },

        {
            title: "Student Registration / HDC Meeting Number",
            dataIndex: 'hdcNumber',
            key: 'hdcNumber',
            align: 'center',
            width: 50,

            render: (text, record) => {
                if(editingState === record.key){
                    return (
                        <Form.Item
                            name="hdcNumber"
                        >
                            <Input />
                        </Form.Item>
                    )
                }
                else{
                    return(
                        <p>{text}</p>
                    )
                }
            }
        },

        {
            title: "Postal Address",
            dataIndex: 'postalAddress',
            key: 'postalAddress',
            align: 'center',
            width: 100,

            render: (text, record) => {
                if(editingState === record.key){
                    return (
                        <Form.Item
                            name="postalAddress"
                        >
                            <Input />
                        </Form.Item>
                    )
                }
                else{
                    return(
                        <p>{text}</p>
                    )
                }
            }
        },

        {
            title: "Email Address(s)",
            dataIndex: 'email',
            key: 'email',
            align: 'center',
            width: 75,

            render: (text, record) => {
                if(editingState === record.key){
                    return (
                        <Form.Item
                            name="email"
                        >
                            <Input />
                        </Form.Item>
                    )
                }
                else{
                    return(
                        <p>{text}</p>
                    )
                }
            }
        },

        {
            title: "Contact Number(s)",
            dataIndex: 'contact',
            key: 'contact',
            align: 'center',
            width: 75,

            render: (text, record) => {
                if(editingState === record.key){
                    return (
                        <Form.Item
                            name="contact"
                        >
                            <Input />
                        </Form.Item>
                    )
                }
                else{
                    return(
                        <p>{text}</p>
                    )
                }
            }
        },

        {
            title: "Affiliated Laboratory",
            dataIndex: 'laboratory',
            key: 'laboratory',
            align: 'center',
            width: 100,

            render: (text, record) => {
                if(editingState === record.key){
                    return (
                        <Form.Item
                            name="laboratory"
                        >
                            <Input />
                        </Form.Item>
                    )
                }
                else{
                    return(
                        <p>{text}</p>
                    )
                }
            }
        },

        {
            title: "Research Title",
            dataIndex: 'researchTitle',
            key: 'researchTitle',
            align: 'center',
            width: 100,

            render: (text, record) => {
                if(editingState === record.key){
                    return (
                        <Form.Item
                            name="researchTitle"
                        >
                            <Input />
                        </Form.Item>
                    )
                }
                else{
                    return(
                        <p>{text}</p>
                    )
                }
            }
        },

        {
            title: "Supervisor(s)",
            dataIndex: 'supervisors',
            key: 'supervisors',
            align: 'center',
            width: 100,

            render: (text, record) => {
                if(editingState === record.key){
                    return (
                        <Form.Item
                            name="supervisors"
                        >
                            <Input />
                        </Form.Item>
                    )
                }
                else{
                    return(
                        <p>{text}</p>
                    )
                }
            }
        },

        // Examiners Column
        {
            title: 'Examiners',
            children : [
                {
                    title: "HoD or Nominee",
                    dataIndex: 'nominee',
                    key: 'nominee',
                    align: 'center',
                    width: 80,

                    render: (text, record) => {
                        if(editingState === record.key){
                            return (
                                <Form.Item
                                    name="nominee"
                                >
                                    <Input />
                                </Form.Item>
                            )
                        }
                        else{
                            return(
                                <p>{text}</p>
                            )
                        }
                    }
                },

                {
                    title: "One Member from outside the Department (Nominated by the HoD)",
                    dataIndex: 'member',
                    key: 'member',
                    align: 'center',
                    width: 80,

                    render: (text, record) => {
                        if(editingState === record.key){
                            return (
                                <Form.Item
                                    name="member"
                                >
                                    <Input />
                                </Form.Item>
                            )
                        }
                        else{
                            return(
                                <p>{text}</p>
                            )
                        }
                    }
                },

                {
                    title: "Internal Examiner 1",
                    dataIndex: 'examiner1',
                    key: 'examiner1',
                    align: 'center',
                    width: 80,

                    render: (text, record) => {
                        if(editingState === record.key){
                            return (
                                <Form.Item
                                    name="examiner1"
                                >
                                    <Input />
                                </Form.Item>
                            )
                        }
                        else{
                            return(
                                <p>{text}</p>
                            )
                        }
                    }
                },

                {
                    title: "Internal Examiner 2",
                    dataIndex: 'examiner2',
                    key: 'examiner2',
                    align: 'center',
                    width: 80,

                    render: (text, record) => {
                        if(editingState === record.key){
                            return (
                                <Form.Item
                                    name="examiner2"
                                >
                                    <Input />
                                </Form.Item>
                            )
                        }
                        else{
                            return(
                                <p>{text}</p>
                            )
                        }
                    }
                },

                {
                    title: "Examiner Appointment / HDC Meeting Number",
                    dataIndex: 'examinerAppointment',
                    key: 'examinerAppointment',
                    align: 'center',
                    width: 80,

                    render: (text, record) => {
                        if(editingState === record.key){
                            return (
                                <Form.Item
                                    name="examinerAppointment"
                                >
                                    <Input />
                                </Form.Item>
                            )
                        }
                        else{
                            return(
                                <p>{text}</p>
                            )
                        }
                    }
                },
            ]
        },

        {
            title: 'Progress Reports',
            children: [
                {
                    title: 'Year 1',
                    children: [
                        {
                            title: "Half-Yearly",
                            dataIndex: 'halfYear1',
                            key: 'halfYear1',
                            align: 'center',
                            width: 50,

                            render: (text, record) => {
                                if(editingState === record.key){
                                    return (
                                        <Form.Item
                                            name="halfYear1"
                                        >
                                            <Input />
                                        </Form.Item>
                                    )
                                }
                                else{
                                    return(
                                        <p>{text}</p>
                                    )
                                }
                            }
                        },

                        {
                            title: "Date Of Report submitted to PG Office",
                            dataIndex: 'dateOfHalfYear1',
                            key: 'dateOfHalfYear1',
                            align: 'center',
                            width: 50,

                            render: (text, record) => {
                                if(editingState === record.key){
                                    return (
                                        <Form.Item
                                            name="dateOfHalfYear1"
                                        >
                                            <Input />
                                        </Form.Item>
                                    )
                                }
                                else{
                                    return(
                                        <p>{text}</p>
                                    )
                                }
                            }
                            
                        },

                        {
                            title: "Review Submitted by Internal Examiner 1",
                            dataIndex: 'Review1HalfYear1',
                            key: 'Review1HalfYear1',
                            align: 'center',
                            width: 50,

                            render: (text, record) => {
                                if(editingState === record.key){
                                    return (
                                        <Form.Item
                                            name="Review1HalfYear1"
                                        >
                                            <Input />
                                        </Form.Item>
                                    )
                                }
                                else{
                                    return(
                                        <p>{text}</p>
                                    )
                                }
                            }
                        },

                        {
                            title: "Review Submitted by Internal Examiner 2",
                            dataIndex: 'Review2HalfYear1',
                            key: 'Review2HalfYear1',
                            align: 'center',
                            width: 50,

                            render: (text, record) => {
                                if(editingState === record.key){
                                    return (
                                        <Form.Item
                                            name="Review2HalfYear1"
                                        >
                                            <Input />
                                        </Form.Item>
                                    )
                                }
                                else{
                                    return(
                                        <p>{text}</p>
                                    )
                                }
                            }
                        },

                        {
                            title: "HoD /Chairperson's Approval",
                            dataIndex: 'approvalHalfYear1',
                            key: 'approvalHalfYear1',
                            align: 'center',
                            width: 50,

                            render: (text, record) => {
                                if(editingState === record.key){
                                    return (
                                        <Form.Item
                                            name="approvalHalfYear1"
                                        >
                                            <Input />
                                        </Form.Item>
                                    )
                                }
                                else{
                                    return(
                                        <p>{text}</p>
                                    )
                                }
                            }
                        },

                        {
                            title: "Yearly",
                            dataIndex: 'Year1',
                            key: 'Year1',
                            align: 'center',
                            width: 50,

                            render: (text, record) => {
                                if(editingState === record.key){
                                    return (
                                        <Form.Item
                                            name="Year1"
                                        >
                                            <Input />
                                        </Form.Item>
                                    )
                                }
                                else{
                                    return(
                                        <p>{text}</p>
                                    )
                                }
                            }
                        },

                        {
                            title: "Date Of Report submitted to PG Office",
                            dataIndex: 'dateOfYear1',
                            key: 'dateOfYear1',
                            align: 'center',
                            width: 50,

                            render: (text, record) => {
                                if(editingState === record.key){
                                    return (
                                        <Form.Item
                                            name="dateOfYear1"
                                        >
                                            <Input />
                                        </Form.Item>
                                    )
                                }
                                else{
                                    return(
                                        <p>{text}</p>
                                    )
                                }
                            }
                        },

                        {
                            title: "Review Submitted by HoD",
                            dataIndex: 'hodReviewYear1',
                            key: 'hodReviewYear1',
                            align: 'center',
                            width: 50,

                            render: (text, record) => {
                                if(editingState === record.key){
                                    return (
                                        <Form.Item
                                            name="hodReviewYear1"
                                        >
                                            <Input />
                                        </Form.Item>
                                    )
                                }
                                else{
                                    return(
                                        <p>{text}</p>
                                    )
                                }
                            }
                        },

                        {
                            title: "Review Submitted by External",
                            dataIndex: 'externalReviewYear1',
                            key: 'externalReviewYear1',
                            align: 'center',
                            width: 50,

                            render: (text, record) => {
                                if(editingState === record.key){
                                    return (
                                        <Form.Item
                                            name="externalReviewYear1"
                                        >
                                            <Input />
                                        </Form.Item>
                                    )
                                }
                                else{
                                    return(
                                        <p>{text}</p>
                                    )
                                }
                            }
                        },

                        {
                            title: "Review Submitted by Internal Examiner 1",
                            dataIndex: 'Review1Year1',
                            key: 'Review1Year1',
                            align: 'center',
                            width: 50,

                            render: (text, record) => {
                                if(editingState === record.key){
                                    return (
                                        <Form.Item
                                            name="Review1Year1"
                                        >
                                            <Input />
                                        </Form.Item>
                                    )
                                }
                                else{
                                    return(
                                        <p>{text}</p>
                                    )
                                }
                            }
                        },

                        {
                            title: "Review Submitted by Internal Examiner 2",
                            dataIndex: 'Review2Year1',
                            key: 'Review2Year1',
                            align: 'center',
                            width: 50,

                            render: (text, record) => {
                                if(editingState === record.key){
                                    return (
                                        <Form.Item
                                            name="Review2Year1"
                                        >
                                            <Input />
                                        </Form.Item>
                                    )
                                }
                                else{
                                    return(
                                        <p>{text}</p>
                                    )
                                }
                            }
                        },

                        {
                            title: "HoD /Chairperson's Approval / Forward to FHDC",
                            dataIndex: 'approvalYear1',
                            key: 'approvalYear1',
                            align: 'center',
                            width: 50,

                            render: (text, record) => {
                                if(editingState === record.key){
                                    return (
                                        <Form.Item
                                            name="approvalYear1"
                                        >
                                            <Input />
                                        </Form.Item>
                                    )
                                }
                                else{
                                    return(
                                        <p>{text}</p>
                                    )
                                }
                            }
                        },

                        {
                            title: "Annual Report Approval HDC Meeting Number",
                            dataIndex: 'reportApprovalHDCYear1',
                            key: 'reportApprovalHDCYear1',
                            align: 'center',
                            width: 50,

                            render: (text, record) => {
                                if(editingState === record.key){
                                    return (
                                        <Form.Item
                                            name="reportApprovalHDCYear1"
                                        >
                                            <Input />
                                        </Form.Item>
                                    )
                                }
                                else{
                                    return(
                                        <p>{text}</p>
                                    )
                                }
                            }
                        }
                    ]
                },

                {
                    title: 'Year 2',
                    children: [
                        {
                            title: "Half-Yearly",
                            dataIndex: 'halfYear2',
                            key: 'halfYear2',
                            align: 'center',
                            width: 50,

                            render: (text, record) => {
                                if(editingState === record.key){
                                    return (
                                        <Form.Item
                                            name="halfYear2"
                                        >
                                            <Input />
                                        </Form.Item>
                                    )
                                }
                                else{
                                    return(
                                        <p>{text}</p>
                                    )
                                }
                            }
                        },

                        {
                            title: "Date Of Report submitted to PG Office",
                            dataIndex: 'dateOfHalfYear2',
                            key: 'dateOfHalfYear2',
                            align: 'center',
                            width: 50,

                            render: (text, record) => {
                                if(editingState === record.key){
                                    return (
                                        <Form.Item
                                            name="dateOfHalfYear2"
                                        >
                                            <Input />
                                        </Form.Item>
                                    )
                                }
                                else{
                                    return(
                                        <p>{text}</p>
                                    )
                                }
                            }
                            
                        },

                        {
                            title: "Review Submitted by Internal Examiner 1",
                            dataIndex: 'Review1HalfYear2',
                            key: 'Review1HalfYear2',
                            align: 'center',
                            width: 50,

                            render: (text, record) => {
                                if(editingState === record.key){
                                    return (
                                        <Form.Item
                                            name="Review1HalfYear2"
                                        >
                                            <Input />
                                        </Form.Item>
                                    )
                                }
                                else{
                                    return(
                                        <p>{text}</p>
                                    )
                                }
                            }
                        },

                        {
                            title: "Review Submitted by Internal Examiner 2",
                            dataIndex: 'Review2HalfYear2',
                            key: 'Review2HalfYear2',
                            align: 'center',
                            width: 50,

                            render: (text, record) => {
                                if(editingState === record.key){
                                    return (
                                        <Form.Item
                                            name="Review2HalfYear2"
                                        >
                                            <Input />
                                        </Form.Item>
                                    )
                                }
                                else{
                                    return(
                                        <p>{text}</p>
                                    )
                                }
                            }
                        },

                        {
                            title: "HoD /Chairperson's Approval",
                            dataIndex: 'approvalHalfYear2',
                            key: 'approvalHalfYear2',
                            align: 'center',
                            width: 50,

                            render: (text, record) => {
                                if(editingState === record.key){
                                    return (
                                        <Form.Item
                                            name="approvalHalfYear2"
                                        >
                                            <Input />
                                        </Form.Item>
                                    )
                                }
                                else{
                                    return(
                                        <p>{text}</p>
                                    )
                                }
                            }
                        },

                        {
                            title: "Yearly",
                            dataIndex: 'Year2',
                            key: 'Year2',
                            align: 'center',
                            width: 50,

                            render: (text, record) => {
                                if(editingState === record.key){
                                    return (
                                        <Form.Item
                                            name="Year2"
                                        >
                                            <Input />
                                        </Form.Item>
                                    )
                                }
                                else{
                                    return(
                                        <p>{text}</p>
                                    )
                                }
                            }
                        },

                        {
                            title: "Date Of Report submitted to PG Office",
                            dataIndex: 'dateOfYear2',
                            key: 'dateOfYear2',
                            align: 'center',
                            width: 50,

                            render: (text, record) => {
                                if(editingState === record.key){
                                    return (
                                        <Form.Item
                                            name="dateOfYear2"
                                        >
                                            <Input />
                                        </Form.Item>
                                    )
                                }
                                else{
                                    return(
                                        <p>{text}</p>
                                    )
                                }
                            }
                        },

                        {
                            title: "Review Submitted by HoD",
                            dataIndex: 'hodReviewYear2',
                            key: 'hodReviewYear2',
                            align: 'center',
                            width: 50,

                            render: (text, record) => {
                                if(editingState === record.key){
                                    return (
                                        <Form.Item
                                            name="hodReviewYear2"
                                        >
                                            <Input />
                                        </Form.Item>
                                    )
                                }
                                else{
                                    return(
                                        <p>{text}</p>
                                    )
                                }
                            }
                        },

                        {
                            title: "Review Submitted by External",
                            dataIndex: 'externalReviewYear2',
                            key: 'externalReviewYear2',
                            align: 'center',
                            width: 50,

                            render: (text, record) => {
                                if(editingState === record.key){
                                    return (
                                        <Form.Item
                                            name="externalReviewYear2"
                                        >
                                            <Input />
                                        </Form.Item>
                                    )
                                }
                                else{
                                    return(
                                        <p>{text}</p>
                                    )
                                }
                            }
                        },

                        {
                            title: "Review Submitted by Internal Examiner 1",
                            dataIndex: 'Review1Year2',
                            key: 'Review1Year2',
                            align: 'center',
                            width: 50,

                            render: (text, record) => {
                                if(editingState === record.key){
                                    return (
                                        <Form.Item
                                            name="Review1Year2"
                                        >
                                            <Input />
                                        </Form.Item>
                                    )
                                }
                                else{
                                    return(
                                        <p>{text}</p>
                                    )
                                }
                            }
                        },

                        {
                            title: "Review Submitted by Internal Examiner 2",
                            dataIndex: 'Review2Year2',
                            key: 'Review2Year2',
                            align: 'center',
                            width: 50,

                            render: (text, record) => {
                                if(editingState === record.key){
                                    return (
                                        <Form.Item
                                            name="Review2Year2"
                                        >
                                            <Input />
                                        </Form.Item>
                                    )
                                }
                                else{
                                    return(
                                        <p>{text}</p>
                                    )
                                }
                            }
                        },

                        {
                            title: "HoD /Chairperson's Approval / Forward to FHDC",
                            dataIndex: 'approvalYear2',
                            key: 'approvalYear2',
                            align: 'center',
                            width: 50,

                            render: (text, record) => {
                                if(editingState === record.key){
                                    return (
                                        <Form.Item
                                            name="approvalYear2"
                                        >
                                            <Input />
                                        </Form.Item>
                                    )
                                }
                                else{
                                    return(
                                        <p>{text}</p>
                                    )
                                }
                            }
                        },

                        {
                            title: "Annual Report Approval HDC Meeting Number",
                            dataIndex: 'reportApprovalHDCYear2',
                            key: 'reportApprovalHDCYear2',
                            align: 'center',
                            width: 50,

                            render: (text, record) => {
                                if(editingState === record.key){
                                    return (
                                        <Form.Item
                                            name="reportApprovalHDCYear2"
                                        >
                                            <Input />
                                        </Form.Item>
                                    )
                                }
                                else{
                                    return(
                                        <p>{text}</p>
                                    )
                                }
                            }
                        }
                    ]
                },

                {
                    title: 'Year 3',
                    children: [
                        {
                            title: "Half-Yearly",
                            dataIndex: 'halfYear3',
                            key: 'halfYear3',
                            align: 'center',
                            width: 50,

                            render: (text, record) => {
                                if(editingState === record.key){
                                    return (
                                        <Form.Item
                                            name="halfYear3"
                                        >
                                            <Input />
                                        </Form.Item>
                                    )
                                }
                                else{
                                    return(
                                        <p>{text}</p>
                                    )
                                }
                            }
                        },

                        {
                            title: "Date Of Report submitted to PG Office",
                            dataIndex: 'dateOfHalfYear3',
                            key: 'dateOfHalfYear3',
                            align: 'center',
                            width: 50,

                            render: (text, record) => {
                                if(editingState === record.key){
                                    return (
                                        <Form.Item
                                            name="dateOfHalfYear3"
                                        >
                                            <Input />
                                        </Form.Item>
                                    )
                                }
                                else{
                                    return(
                                        <p>{text}</p>
                                    )
                                }
                            }
                        },

                        {
                            title: "Review Submitted by Internal Examiner 1",
                            dataIndex: 'Review1HalfYear3',
                            key: 'Review1HalfYear3',
                            align: 'center',
                            width: 50,

                            render: (text, record) => {
                                if(editingState === record.key){
                                    return (
                                        <Form.Item
                                            name="Review1HalfYear3"
                                        >
                                            <Input />
                                        </Form.Item>
                                    )
                                }
                                else{
                                    return(
                                        <p>{text}</p>
                                    )
                                }
                            }
                        },

                        {
                            title: "Review Submitted by Internal Examiner 2",
                            dataIndex: 'Review2HalfYear3',
                            key: 'Review2HalfYear3',
                            align: 'center',
                            width: 50,

                            render: (text, record) => {
                                if(editingState === record.key){
                                    return (
                                        <Form.Item
                                            name="Review2HalfYear3"
                                        >
                                            <Input />
                                        </Form.Item>
                                    )
                                }
                                else{
                                    return(
                                        <p>{text}</p>
                                    )
                                }
                            }
                        },

                        {
                            title: "HoD /Chairperson's Approval",
                            dataIndex: 'approvalHalfYear3',
                            key: 'approvalHalfYear3',
                            align: 'center',
                            width: 50,

                            render: (text, record) => {
                                if(editingState === record.key){
                                    return (
                                        <Form.Item
                                            name="approvalHalfYear3"
                                        >
                                            <Input />
                                        </Form.Item>
                                    )
                                }
                                else{
                                    return(
                                        <p>{text}</p>
                                    )
                                }
                            }
                        },

                        {
                            title: "Yearly",
                            dataIndex: 'Year3',
                            key: 'Year3',
                            align: 'center',
                            width: 50,

                            render: (text, record) => {
                                if(editingState === record.key){
                                    return (
                                        <Form.Item
                                            name="Year3"
                                        >
                                            <Input />
                                        </Form.Item>
                                    )
                                }
                                else{
                                    return(
                                        <p>{text}</p>
                                    )
                                }
                            }
                        },

                        {
                            title: "Date Of Report submitted to PG Office",
                            dataIndex: 'dateOfYear3',
                            key: 'dateOfYear3',
                            align: 'center',
                            width: 50,

                            render: (text, record) => {
                                if(editingState === record.key){
                                    return (
                                        <Form.Item
                                            name="dateOfYear3"
                                        >
                                            <Input />
                                        </Form.Item>
                                    )
                                }
                                else{
                                    return(
                                        <p>{text}</p>
                                    )
                                }
                            }
                        },

                        {
                            title: "Review Submitted by HoD",
                            dataIndex: 'hodReviewYear3',
                            key: 'hodReviewYear3',
                            align: 'center',
                            width: 50,

                            render: (text, record) => {
                                if(editingState === record.key){
                                    return (
                                        <Form.Item
                                            name="hodReviewYear3"
                                        >
                                            <Input />
                                        </Form.Item>
                                    )
                                }
                                else{
                                    return(
                                        <p>{text}</p>
                                    )
                                }
                            }
                        },

                        {
                            title: "Review Submitted by External",
                            dataIndex: 'externalReviewYear3',
                            key: 'externalReviewYear3',
                            align: 'center',
                            width: 50,

                            render: (text, record) => {
                                if(editingState === record.key){
                                    return (
                                        <Form.Item
                                            name="externalReviewYear3"
                                        >
                                            <Input />
                                        </Form.Item>
                                    )
                                }
                                else{
                                    return(
                                        <p>{text}</p>
                                    )
                                }
                            }
                        },

                        {
                            title: "Review Submitted by Internal Examiner 1",
                            dataIndex: 'Review1Year3',
                            key: 'Review1Year3',
                            align: 'center',
                            width: 50,

                            render: (text, record) => {
                                if(editingState === record.key){
                                    return (
                                        <Form.Item
                                            name="Review1Year3"
                                        >
                                            <Input />
                                        </Form.Item>
                                    )
                                }
                                else{
                                    return(
                                        <p>{text}</p>
                                    )
                                }
                            }
                        },

                        {
                            title: "Review Submitted by Internal Examiner 2",
                            dataIndex: 'Review2Year3',
                            key: 'Review2Year3',
                            align: 'center',
                            width: 50,

                            render: (text, record) => {
                                if(editingState === record.key){
                                    return (
                                        <Form.Item
                                            name="Review2Year3"
                                        >
                                            <Input />
                                        </Form.Item>
                                    )
                                }
                                else{
                                    return(
                                        <p>{text}</p>
                                    )
                                }
                            }
                        },

                        {
                            title: "HoD /Chairperson's Approval / Forward to FHDC",
                            dataIndex: 'approvalYear3',
                            key: 'approvalYear3',
                            align: 'center',
                            width: 50,

                            render: (text, record) => {
                                if(editingState === record.key){
                                    return (
                                        <Form.Item
                                            name="approvalYear3"
                                        >
                                            <Input />
                                        </Form.Item>
                                    )
                                }
                                else{
                                    return(
                                        <p>{text}</p>
                                    )
                                }
                            }
                        },

                        {
                            title: "Annual Report Approval HDC Meeting Number",
                            dataIndex: 'reportApprovalHDCYear3',
                            key: 'reportApprovalHDCYear3',
                            align: 'center',
                            width: 50,

                            render: (text, record) => {
                                if(editingState === record.key){
                                    return (
                                        <Form.Item
                                            name="reportApprovalHDCYear3"
                                        >
                                            <Input />
                                        </Form.Item>
                                    )
                                }
                                else{
                                    return(
                                        <p>{text}</p>
                                    )
                                }
                            }
                        }
                    ]
                }
            ]
        },

        {
            title: "Thesis Submission",
            children: [
                {
                    title: 'Date of Draft Thesis Submission (PG Office)',
                    dataIndex: 'dateOfThesis',
                    key: 'dateOfThesis',
                    align: 'center',
                    width: 50,

                    render: (text, record) => {
                        if(editingState === record.key){
                            return (
                                <Form.Item
                                    name="dateOfThesis"
                                >
                                    <Input />
                                </Form.Item>
                            )
                        }
                        else{
                            return(
                                <p>{text}</p>
                            )
                        }
                    }
                },

                {
                    title: 'Review Submitted By HoD',
                    dataIndex: 'hodThesisReview',
                    key: 'hodThesisReview',
                    align: 'center',
                    width: 50,

                    render: (text, record) => {
                        if(editingState === record.key){
                            return (
                                <Form.Item
                                    name="hodThesisReview"
                                >
                                    <Input />
                                </Form.Item>
                            )
                        }
                        else{
                            return(
                                <p>{text}</p>
                            )
                        }
                    }
                },

                {
                    title: 'Review Submitted By External',
                    dataIndex: 'thesisReviewExternal',
                    key: 'thesisReviewExternal',
                    align: 'center',
                    width: 50,

                    render: (text, record) => {
                        if(editingState === record.key){
                            return (
                                <Form.Item
                                    name="thesisReviewExternal"
                                >
                                    <Input />
                                </Form.Item>
                            )
                        }
                        else{
                            return(
                                <p>{text}</p>
                            )
                        }
                    }
                },

                {
                    title: 'Rerview Submitted By Internal Examiner 1',
                    dataIndex: 'thesisReviewInternal1',
                    key: 'thesisReviewInternal1',
                    align: 'center',
                    width: 50,

                    render: (text, record) => {
                        if(editingState === record.key){
                            return (
                                <Form.Item
                                    name="thesisReviewInternal1"
                                >
                                    <Input />
                                </Form.Item>
                            )
                        }
                        else{
                            return(
                                <p>{text}</p>
                            )
                        }
                    }
                },

                {
                    title: 'Review Submitted By Internal Examiner 2',
                    dataIndex: 'thesisReviewInternal2',
                    key: 'thesisReviewInternal2',
                    align: 'center',
                    width: 50,

                    render: (text, record) => {
                        if(editingState === record.key){
                            return (
                                <Form.Item
                                    name="thesisReviewInternal2"
                                >
                                    <Input />
                                </Form.Item>
                            )
                        }
                        else{
                            return(
                                <p>{text}</p>
                            )
                        }
                    }
                },

                {
                    title: 'Revisions Approved',
                    dataIndex: 'revisionsApproved',
                    key: 'revisionsApproved',
                    align: 'center',
                    width: 50,

                    render: (text, record) => {
                        if(editingState === record.key){
                            return (
                                <Form.Item
                                    name="revisionsApproved"
                                >
                                    <Input />
                                </Form.Item>
                            )
                        }
                        else{
                            return(
                                <p>{text}</p>
                            )
                        }
                    }
                },

                {
                    title: 'Evaluation Report',
                    dataIndex: 'evaluationReport',
                    key: 'evaluationReport',
                    align: 'center',
                    width: 50,

                    render: (text, record) => {
                        if(editingState === record.key){
                            return (
                                <Form.Item
                                    name="evaluationReport"
                                >
                                    <Input />
                                </Form.Item>
                            )
                        }
                        else{
                            return(
                                <p>{text}</p>
                            )
                        }
                    }
                }
            ]
        },

        {
            title: "Thesis Submitted to AR",
            dataIndex: 'thesisToAR',
            key: 'thesisToAR',
            align: 'center',
            width: 75,

            render: (text, record) => {
                if(editingState === record.key){
                    return (
                        <Form.Item
                            name="thesisToAR"
                        >
                            <Input />
                        </Form.Item>
                    )
                }
                else{
                    return(
                        <p>{text}</p>
                    )
                }
            }
        },

        {
            title: "Effective Date of Degree",
            dataIndex: 'effectiveDate',
            key: 'effectiveDate',
            align: 'center',
            width: 75,

            render: (text, record) => {
                if(editingState === record.key){
                    return (
                        <Form.Item
                            name="effectiveDate"
                        >
                            <Input />
                        </Form.Item>
                    )
                }
                else{
                    return(
                        <p>{text}</p>
                    )
                }
            }
        },

        {
            title: "Date of Completion",
            dataIndex: 'dateOfCompletion',
            key: 'dateOfCompletion',
            align: 'center',
            width: 75,

            render: (text, record) => {
                if(editingState === record.key){
                    return (
                        <Form.Item
                            name="dateOfCompletion"
                        >
                            <Input />
                        </Form.Item>
                    )
                }
                else{
                    return(
                        <p>{text}</p>
                    )
                }
            }
        },

        {
            title: 'Actions',
            dataIndex: 'action',
            key: 'action',
            fixed: 'right',
            width: 75,
            align: 'center',
            
            render: (_, record) => {
                return(
                    <>
                        <Button type='link' 
                            onClick={() => {
                                setEditState(record.key);
                                form.setFieldsValue({

                                    number: record.number,
                                    nameWithInitials: record.nameWithInitials,
                                    initials: record.initials,
                                    hdcNumberPro: record.hdcNumberPro,
                                    regNo: record.regNo,
                                    dateOfReg: record.dateOfReg,
                                    period: record.period,
                                    hdcNumber: record.hdcNumber,
                                    postalAddress: record.postalAddress,
                                    email: record.email,
                                    contact: record.contact,
                                    laboratory: record.laboratory,
                                    researchTitle: record.researchTitle,
                                    supervisors: record.supervisors,
                                    
                                    nominee: record.nominee,
                                    member: record.member,
                                    examiner1: record.examiner1,
                                    examiner2: record.examiner2,
                                    examinerAppointment: record.examinerAppointment,
                                    
                                    halfYear1: record.halfYear1,
                                    dateOfHalfYear1: record.dateOfHalfYear1,
                                    Review1HalfYear1: record.Review1HalfYear1,
                                    Review2HalfYear1: record.Review2HalfYear1,
                                    approvalHalfYear1: record.approvalHalfYear1,
                                    Year1: record.Year1,
                                    dateOfYear1: record.dateOfYear1,
                                    hodReviewYear1: record.hodReviewYear1,
                                    externalReviewYear1: record.externalReviewYear1,
                                    Review1Year1: record.Review1Year1,
                                    Review2Year1: record.Review2Year1,
                                    approvalYear1: record.approvalYear1,
                                    reportApprovalHDCYear1: record.reportApprovalHDCYear1,

                                    halfYear2: record.halfYear2,
                                    dateOfHalfYear2: record.dateOfHalfYear2,
                                    Review1HalfYear2: record.Review1HalfYear2,
                                    Review2HalfYear2: record.Review2HalfYear2,
                                    approvalHalfYear2: record.approvalHalfYear2,
                                    Year2: record.Year2,
                                    dateOfYear2: record.dateOfYear2,
                                    hodReviewYear2: record.hodReviewYear2,
                                    externalReviewYear2: record.externalReviewYear2,
                                    Review1Year2: record.Review1Year2,
                                    Review2Year2: record.Review2Year2,
                                    approvalYear2: record.approvalYear2,
                                    reportApprovalHDCYear2: record.reportApprovalHDCYear2,

                                    halfYear3: record.halfYear3,
                                    dateOfHalfYear3: record.dateOfHalfYear3,
                                    Review1HalfYear3: record.Review1HalfYear3,
                                    Review2HalfYear3: record.Review2HalfYear3,
                                    approvalHalfYear3: record.approvalHalfYear3,
                                    Year3: record.Year3,
                                    dateOfYear3: record.dateOfYear3,
                                    hodReviewYear3: record.hodReviewYear3,
                                    externalReviewYear3: record.externalReviewYear3,
                                    Review1Year3: record.Review1Year3,
                                    Review2Year3: record.Review2Year3,
                                    approvalYear3: record.approvalYear3,
                                    reportApprovalHDCYear3: record.reportApprovalHDCYear3,

                                    dateOfThesis: record.dateOfThesis,
                                    hodThesisReview: record.hodThesisReview,
                                    thesisReviewExternal: record.thesisReviewExternal,
                                    thesisReviewInternal1: record.thesisReviewInternal1,
                                    thesisReviewInternal2: record.thesisReviewInternal2,
                                    revisionsApproved: record.revisionsApproved,
                                    evaluationReport: record.evaluationReport,

                                    thesisToAR: record.thesisToAR,
                                    effectiveDate: record.effectiveDate,
                                    dateOfCompletion: record.dateOfCompletion


                                });
                            }}
                        >Edit</Button>
                        <Button type='link' htmlType='submit' >Save</Button>
                    </>
                );
            }

        }
    ];

    // Functions relating to the Editing





    ////////////////////////////////////////////////
    // Dummy Data //

    useEffect(() => {

        const data = [];

        for( let index =0 ; index< 3; index++){
            data.push({
                key: `${index}`,
                number: `Hello ${index}`,
                nameWithInitials: `Hello ${index}`,
                initials: `Hello ${index}`,
                hdcNumberPro: `Hello ${index}`,
                regNo: `Hello ${index}`,
                dateOfReg: `Hello ${index}`,
                period: `Hello ${index}`,
                hdcNumber: `Hello ${index}`,
                postalAddress: `Hello ${index}`,
                email: `Hello ${index}`,
                contact: `Hello ${index}`,
                laboratory: `Hello ${index}`,
                researchTitle: `Hello ${index}`,
                supervisors: `Hello ${index}`,
                
                nominee: `Hello ${index}`,
                member: `Hello ${index}`,
                examiner1: `Hello ${index}`,
                examiner2: `Hello ${index}`,
                examinerAppointment: `Hello ${index}`, 
                
                halfYear1: `Hello ${index}`,
                dateOfHalfYear1: `Hello ${index}`,
                Review1HalfYear1: `Hello ${index}`,
                Review2HalfYear1: `Hello ${index}`,
                approvalHalfYear1: `Hello ${index}`,
                Year1: `Hello ${index}`,
                dateOfYear1: `Hello ${index}`,
                hodReviewYear1: `Hello ${index}`,
                externalReviewYear1: `Hello ${index}`,
                Review1Year1: `Hello ${index}`,
                Review2Year1: `Hello ${index}`,
                approvalYear1: `Hello ${index}`,
                reportApprovalHDCYear1: `Hello ${index}`,

                halfYear2: `Hello ${index}`,
                dateOfHalfYear2: `Hello ${index}`,
                Review1HalfYear2: `Hello ${index}`,
                Review2HalfYear2: `Hello ${index}`,
                approvalHalfYear2: `Hello ${index}`,
                Year2: `Hello ${index}`,
                dateOfYear2: `Hello ${index}`,
                hodReviewYear2: `Hello ${index}`,
                externalReviewYear2: `Hello ${index}`,
                Review1Year2: `Hello ${index}`,
                Review2Year2: `Hello ${index}`,
                approvalYear2: `Hello ${index}`,
                reportApprovalHDCYear2: `Hello ${index}`,

                halfYear3: `Hello ${index}`,
                dateOfHalfYear3: `Hello ${index}`,
                Review1HalfYear3: `Hello ${index}`,
                Review2HalfYear3: `Hello ${index}`,
                approvalHalfYear3: `Hello ${index}`,
                Year3: `Hello ${index}`,
                dateOfYear3: `Hello ${index}`,
                hodReviewYear3: `Hello ${index}`,
                externalReviewYear3: `Hello ${index}`,
                Review1Year3: `Hello ${index}`,
                Review2Year3: `Hello ${index}`,
                approvalYear3: `Hello ${index}`,
                reportApprovalHDCYear3: `Hello ${index}`,

                dateOfThesis: `Hello ${index}`,
                hodThesisReview: `Hello ${index}`,
                thesisReviewExternal: `Hello ${index}`,
                thesisReviewInternal1: `Hello ${index}`,
                thesisReviewInternal2: `Hello ${index}`,
                revisionsApproved: `Hello ${index}`,
                evaluationReport: `Hello ${index}`,

                thesisToAR: `Hello ${index}`,
                effectiveDate: `Hello ${index}`,
                dateOfCompletion: `Hello ${index}`,

            });

        }

        setState(data);
    }, []);
    

    

    


    ////////////////////////////////////////////////

    // OnFinish Function

    const onFinish = (values) => {

        console.log({values});
        const updatedState = [...state];
        updatedState.splice(editingState, 1, { ...values, key:editingState});
        setState(updatedState);
        setEditState(null);
        
        // Values Should be Imported To Get Details of How the Table is Changed
    };


    // Return ANTD Table
    return (

        <div className='container' style={{minWidth: '1500px'}}>
            <div className='text-center'>
                <Form form={form} onFinish={onFinish}>
                    <Table
                        columns={column}
                        dataSource={state}
                        bordered
                        size='middle'
                        scroll={{ x: 10000, y: 300 }}
                        >
                    </Table>
                </Form>
            </div>
        </div>
    )


}


export default CCDashboard;