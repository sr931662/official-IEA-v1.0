// const express = require("express")
const mongoose = require("mongoose")

const projectSchema = new mongoose.Schema({
    clientInfo : {
        fullName: {
            type: String,
            required: true
        },
        phone: {
            type: Number,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        idProof: {
            type: File,
            required: true
        }
    },

    projectInfo : {
        projectType : {
            type: String,
            required: true
        },
        projectLocation : {
            type: String,
            required: true
        },
        landOwnershipDocuments : {
            type: File,
            required: true
        },
        estimatedBudget : {
            type: Number,
            required: true
        }
    },
    legalRegCompliance : {
        zoningAndLandUsePermits : {
            type: File,
        },
        buildingPermits : {
            type: File
        },
        environmentalClearance : {
            type: File
        },
        fireSafetyApprovals : {
            type: File,
        },
        utilityApprovals : {
            type: File,
        }
    },
    timelineAndMilestones : {
        projectStartDate : {
            type: Date
        },
        estimatedCompletionDate : {
            type: Date
        }
    },
    financialDetails : {
        paymentSchedule : {
            type: String,
        },
        costEstimates : {
            type: String,
        },
        fundingSources : {
            type: String,
        }
    },
    contractorInfo : {
        contractorDetails : {
            type: String,
        },
        subcontVendors : {
            type : String
        },
        agreementNContracts : {
            type : File
        },
        insuranceCoverage : {
            type : String
        },
        liabilityClouses : {
            type : String
        }
    },
    environmentalInfo : {
        sustanabilityGoals : {
            type : String
        },
        accessibilityNeeds : {
            type : String
        },
        aestheticPreferences : {
            type : String
        }
    }
})
