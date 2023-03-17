import React from 'react'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const DTPrimaryBtn = styled(Button)(({ theme }) => ({
    color: theme.palette.primary.white,
    borderRadius: theme.shapes.borderRadius,
    backgroundColor: theme.palette.primary.main_dark,
    fontSize: theme.shapes.breadcrumb_fontsize,
    textTransform: 'capitalize',
    padding: theme.spacing(1.5, 5),
    fontSize: theme.shapes.breadcrumb_fontsize,
    whiteSpace: "pre",
    '&:hover': {
        backgroundColor: theme.palette.primary.yellow_dark,
    },
    "&:disabled": {
        backgroundColor: theme.palette.primary.yellow_with_opacity,
    }
}));


const DTSecondaryIconButton = (props) => {
    const { btn_text, type, btnStatus } = props
    return (
        <DTPrimaryBtn type={type} disabled={btnStatus} {...props}>
            {props.icon}{btn_text}
        </DTPrimaryBtn>
    )
}


















<DTSecondaryIconButton
    btn_text={`Add New ${toggleState.includes('Corporate') ? toggleState.replace('Corporate', 'Corporation') : toggleState}`}
    onClick={() => {
        setDialogEditMode(false);
        dialogStateHandle(true);
    }}
    icon={<AddIcon sx={{ fontSize: "18px", mr: 0.5 }} />}
/>}




import { FormControl } from "@mui/material";
import Select from "@mui/material/Select";
import styled from "@emotion/styled";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import theme from "../../theme";

const SelectBox = styled(Select)(({ theme }) => ({
    color: "#6D7A83",
    fontSize: "14px",
    borderRadius: theme.shapes.borderRadius,
    border: "none",
    border: `1px solid #DCE3EB`,
    backgroundColor: theme.palette.primary.light_WhiteBlue,
    height: "48px"
}));

const DTSelect = (props) => {
    return (
        <FormControl size="small" fullWidth={true} variant="outlined" sx={{ "& .MuiOutlinedInput-notchedOutline": { border: "none" } }}>
            <SelectBox
                {...props}
                IconComponent={(props) => <ExpandMoreIcon {...props} />}
                MenuProps={{
                    sx: {
                        fontSize: "14px",
                        color: "red",
                        "&& .MuiList-root": {
                            backgroundColor: "#FBFCFD",
                            fontSize: "14px",
                            color: "#6D7A83",
                        },
                        "&& .MuiMenuItem-root:hover": {
                            backgroundColor: "rgba(165, 169, 68, .4)",
                        },
                        "&& .MuiMenuItem-root": {
                            fontSize: "14px",
                            padding: "14px",
                        },
                        "&& .Mui-selected": {
                            backgroundColor: "rgba(165, 169, 68, .4)",
                            color: "#6D7A83",
                            fontSize: "14px",
                        },
                        // "&& .Mui-selected:hover": {
                        //     backgroundColor: "rgba(165, 169, 68, .4)",
                        //     color: "#6D7A83",
                        //     fontSize: "14px",
                        // },
                    },
                }}
            >
                {props.children}
            </SelectBox>
        </FormControl>
    );
};
export default DTSelect


    < DTSelect
value = { selectedCorporate }
onChange = {(e) => {
                         
                        >

        { corporate && corporate?.results?.map((item) => (
            <MenuItem value={item}>{item?.name}</MenuItem>
        ))
}
                        </DTSelect >
                        
                        
                        import * as React from 'react';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import theme from '../../theme';

const Android12Switch = styled(Switch)(() => ({
    padding: 8,
    oppacity: "1!imortant",
    '& .MuiSwitch-track': {
        backgroundColor: "#DFDFDF!important",
        opacity: `1!important`,
        borderRadius: 22 / 2,
        '&:before, &:after': {
            content: '""',
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            width: 16,
            height: 16,
        },
    },
    '& .Mui-checked + .MuiSwitch-track': {
        backgroundColor: `${theme.palette.primary.yellow_dark}!important`,
        opacity: `1!important`,
    },
    '& .Mui-disabled + .MuiSwitch-track': {
        backgroundColor: `${theme.palette.primary.ligth_GrayWhite}!important`,

    },
    '& .MuiSwitch-thumb': {
        boxShadow: 'none',
        width: 16,
        height: 16,
        margin: 2,
    },
}));



export default function DTSwitch(props) {
    return (
        <FormGroup>
            <FormControlLabel sx={{ color: "rgba(10, 52, 80, .6)", fontSize: "13px", marginRight: "0" }}
                control={<Android12Switch {...props} />}
                label={props.label}
            />
        </FormGroup>
    );
}


<DTContainer sx={{ py: 1 }}>
    <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <DTHeadingPrimary>Order Point TALK with no vehicle Present?</DTHeadingPrimary>
        <DTSwitch
            checked={OrderTakerTalkWithNoVehicle}
            label={OrderTakerTalkWithNoVehicle ? "Yes" : "No"}
            onChange={(e) => {
                setOrderTakerTalkWithNoVehicle(e.target.checked);
            }}
        />
    </span>
</DTContainer>