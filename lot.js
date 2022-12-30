const split = (orders, start, end) => {
    orders = orders.split(',').map(o => parseInt(o));
    navigator.clipboard.writeText(orders.slice(start, end));
}

const code = (q) => {
    return q.split(";").map(a => a.split('"')[1]).join(" ");
}


const s =
    ` query.appendQuery("select ");
        query.appendQuery("eln.eln_elt_level_num as tlv_internal_num, ");
        query.appendQuery("eln.eln_elt_level_num as tlv_external_code, ");
        query.appendQuery("eln.org_num_organization_org as tlv_organization_num, ");
        query.appendQuery("eln.lev_level_num_lev as tlv_level_num, ");
        query.appendQuery("lab.lat_long_label as tlv_label, ");
        query.appendQuery("eln.eln_elt_level_num_sup as tlv_parent_num, ");
        query.appendQuery("eln.eln_active_level_flag as tlv_active_flag, ");
        query.appendQuery("eln.eln_level_responsible as tlv_level_responsible ");
        query.appendQuery(", ela.ela_right_type as tlv_right_type ");
        query.appendQuery("from model_linking mlk ");\t
        query.appendQuery("inner join tree_level_structure fam on fam.org_num_organization_org=mlk.org_num_organization_org and fam.lev_level_num_lev=mlk.lev_level_num_eln and fam.eln_elt_level_num=mlk.eln_elt_level_num_eln ");
        query.appendQuery("inner join tree_level_structure sdt on sdt.org_num_organization_org=fam.org_num_organization_sup and sdt.lev_level_num_lev=fam.lev_level_num_sup and sdt.eln_elt_level_num=fam.eln_elt_level_num_sup ");
        query.appendQuery("inner join tree_level_structure dpt on dpt.org_num_organization_org=sdt.org_num_organization_sup and dpt.lev_level_num_lev=sdt.lev_level_num_sup and dpt.eln_elt_level_num=sdt.eln_elt_level_num_sup ");
        query.appendQuery("inner join tree_level_structure sec on sec.org_num_organization_org=dpt.org_num_organization_sup and sec.lev_level_num_lev=dpt.lev_level_num_sup and sec.eln_elt_level_num=dpt.eln_elt_level_num_sup ");
        query.appendQuery("inner join tree_level_structure eln on ");
        query.appendQuery("(fam.org_num_organization_org=eln.org_num_organization_org and fam.lev_level_num_lev=eln.lev_level_num_lev and fam.eln_elt_level_num=eln.eln_elt_level_num) or ");
        query.appendQuery("(sdt.org_num_organization_org=eln.org_num_organization_org and sdt.lev_level_num_lev=eln.lev_level_num_lev and sdt.eln_elt_level_num=eln.eln_elt_level_num) or ");
        query.appendQuery("(dpt.org_num_organization_org=eln.org_num_organization_org and dpt.lev_level_num_lev=eln.lev_level_num_lev and dpt.eln_elt_level_num=eln.eln_elt_level_num) or ");
        query.appendQuery("(sec.org_num_organization_org=eln.org_num_organization_org and sec.lev_level_num_lev=eln.lev_level_num_lev and sec.eln_elt_level_num=eln.eln_elt_level_num) or ");
        query.appendQuery("(sec.org_num_organization_sup=eln.org_num_organization_org and sec.lev_level_num_sup=eln.lev_level_num_lev and sec.eln_elt_level_num_sup=eln.eln_elt_level_num) ");
        query.appendQuery("inner join label_translation lab on lab.tlb_label_type_lab=eln.tlb_label_type_lab and lab.lab_label_num_lab=eln.lab_label_num_lab and lab.lan_code_langue_lan=? ");
        query.appendQuery("left outer join elt_level_agreement ela on ela.ela_user_id=? ");
        query.appendQuery("and ela.org_num_organization_eln=eln.org_num_organization_org and ela.lev_level_num_eln=eln.lev_level_num_lev and ela.eln_elt_level_num_eln=eln.eln_elt_level_num ");
        query.appendQuery("where ");
        query.appendQuery("mlk.org_num_organization_org=?  and ");
        query.appendQuery("mlk.elp_element_prod_num_elg=? ");  `;

console.log(code(s));