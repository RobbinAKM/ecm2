import React from "react";
import PropTypes from "prop-types";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  withStyles,
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ColoredButton from "../../../shared/components/ColoredButton";

const styles = (theme) => ({
  dialogActions: {
    justifyContent: "flex-start",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  dialog: {
    zIndex: 1400,
  },
  backIcon: {
    marginRight: theme.spacing(1),
  },
});

function CookieRulesDialog(props) {
  const { classes, onClose, open, theme } = props;
  return (
    <Dialog
      open={open}
      scroll="paper"
      onClose={onClose}
      className={classes.dialog}
    >
      <DialogTitle>個人情報保護方針</DialogTitle>
      <DialogContent>
        <Typography variant="h6" color="primary" paragraph>
          原則
        </Typography>
        <Typography paragraph>
          当社のWebサイト訪問者のプライバシーを保護することをお約束します。
          このポリシーでは、お客様の個人情報をどのように取り扱うかについて説明します。
          当社のウェブサイトを使用し、このポリシーに同意することにより、このポリシーの条件に従ってCookieを使用することに同意したことになります。
          Version 2.0
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          範囲
        </Typography>
        <Typography paragraph>
          このポリシーは、お客様、サードパーティのビジネスアソシエイト、従業員などに関する個人情報、およびその個人情報の管理に適用されます。
          クライアントにサービスを提供する際に、AVTELは個人データレコードを含むクライアントデータベースへのアクセスを許可される場合があり、サービスを提供する際にそのようなレコードを処理する必要がある場合があります。
          そのような場合、当社はお客様の指示に従い、お客様の個人情報を取り扱います。
          このポリシーは、お客様の個人データ、つまりお客様を特定できる個人に関するデータに関連しています。
          したがって、このポリシーは、生きている個人にリンクできない形式で保持、処理、開示、または公開されている限り、どのデータにも適用されません（匿名データ、または直接または間接的に使用してユーザーを抽出できない集計データなど）。個人データ）。
          当社は、お客様の個人データを含むデータベースから抽出された匿名化および集約されたデータを生成し、適切と思われる匿名化および集約されたデータを利用する権利を留保します（そのようなデータの公開および第三者との共有を含む）。
          このポリシーは、当社の情報処理活動のグローバルな基準を確立することを目的としていますが、これらの処理活動は、法律の制限に基づいて、一部の法域ではより制限される場合があります。
          たとえば、特定の国の法律により、収集できる個人情報の種類やその個人情報の処理方法が制限される場合があります。
          そのような状況では、関連する地域の法律および規制を遵守します。
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          情報の収集と保持の方法
        </Typography>
        <Typography paragraph>
          お客様が関連する会社が当社のサービスに関連して当社に関与するとき、または当社から製品またはサービスを購入するときに、お客様が以下にお客様の詳細を提供するときに、お客様の個人情報を直接収集します。業界や学生のイベントで私たちを、またはあなたが私たちと他の取り決めを結ぶ場合は、私たちにフィードバック/苦情を提供するか、あなたの詳細を私たちに登録してください。
          サプライヤーと従業員に関する情報は通常、サプライヤーから収集されます。
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          The Cookies We Set
        </Typography>
        <Typography paragraph>Account related cookies:</Typography>
        <Typography paragraph>
          If you create an account with us then we will use cookies for the
          management of the signup process and general administration. These
          cookies will usually be deleted when you log out however in some cases
          they may remain afterwards to remember your site preferences when
          logged out. We use cookies to remember that you accepted this message.
        </Typography>
        <Typography paragraph>Login related cookies:</Typography>
        <Typography paragraph>
          We use cookies when you are logged in so that we can remember this
          fact. This prevents you from having to log in every single time you
          visit a new page. These cookies are typically removed or cleared when
          you log out to ensure that you can only access restricted features and
          areas when logged in.
        </Typography>
        <Typography paragraph>Site preferences cookies:</Typography>
        <Typography paragraph>
          In order to provide you with a great experience on this site we
          provide the functionality to set your preferences for how this site
          runs when you use it. In order to remember your preferences we need to
          set cookies so that this information can be called whenever you
          interact with a page is affected by your preferences.
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          Third Party Cookies:
        </Typography>
        <Typography paragraph>
          In some special cases we also use cookies provided by trusted third
          parties. The following section details which third party cookies you
          might encounter through this site.
        </Typography>
        <Typography paragraph>
          Third party analytics are used to track and measure usage of this site
          so that we can continue to produce engaging content. These cookies may
          track things such as how long you spend on the site or pages you visit
          which helps us to understand how we can improve the site for you.
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          More Information
        </Typography>
        <Typography paragraph>
          Hopefully that has clarified things for you and as was previously
          mentioned if there is something that you aren&apos;t sure whether you
          need or not it&apos;s usually safer to leave cookies enabled in case
          it does interact with one of the features you use on our site. This
          Cookies Policy was created with the help of the Cookies Policy
          Template Generator and the Terms and Conditions Template.
        </Typography>
        <Typography paragraph>
          However if you are still looking for more information then you can
          contact us by sending an email to tim.v.kaenel@gmail.com.
        </Typography>
      </DialogContent>
      <DialogActions className={classes.dialogActions}>
        <ColoredButton
          onClick={onClose}
          variant="contained"
          color={theme.palette.common.black}
        >
          <ArrowBackIcon className={classes.backIcon} />
          戻る
        </ColoredButton>
      </DialogActions>
    </Dialog>
  );
}

CookieRulesDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(CookieRulesDialog);
